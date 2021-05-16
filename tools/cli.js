#!/usr/bin/env node

import fs from 'fs';
import https from 'https';
import mustache from 'mustache';
import inquirer from 'inquirer';

let base = './src/posts/'

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        default: 'title'
    },
    {
        type: 'input',
        name: 'slug',
        default: (a) => {
            return new Promise((resolve, reject) => {
                resolve(a.title.toLowerCase().trim().replace(/\s/g, '-').replace(/[^-a-z0-9]/g, ''));
            })
        },
        validate: (i) => {
            return new Promise((resolve, reject) => {
                if(/^[-\w]*$/.test(i) && /[^0-9]+/.test(i)) {
                    if (fs.existsSync(`${base}${i}`)) {
                        resolve('directory already exists');
                    } else {
                        resolve(true);
                    }
                } else {
                    resolve('not a valid slug')
                }
            })
        }
    },
    {
        type: 'input',
        name: 'description',
        default: 'description'
    },
    {
        type: 'input',
        name: 'author',
        default: 'author'
    },
    {
        type: 'input',
        name: 'date',
        default: new Date().toISOString(),
        filter: (d) => {
            return new Promise((resolve, reject) => {
                resolve(new Date(d).toISOString());
            })
        }
    },
    {
        type: 'input',
        name: 'categories',
        default: 'default',
        filter: (i) => {
            return new Promise((resolve, reject) => {
                resolve(i.split(',').map(s=>s.trim()));
            })
        }
    },
    {
        type: 'input',
        name: 'tags',
        default: 'default',
        filter: (i) => {
            return new Promise((resolve, reject) => {
                resolve(i.split(',').map(s=>s.trim()));
            })
        }
    },
    {
        type: 'list',
        name: 'type',
        message: 'type of content:',
        choices: ['default', 'editor', 'lorem markdown']
    },
    {
        type: 'input',
        name: 'content',
        when: (a) => {
            return new Promise((resolve, reject) => {
                resolve(a.type == 'editor')
            })
        },
        default: (a) => {
            return new Promise((resolve, reject) => {
                resolve(`# ${a.title}`);
            })
        }
    }
]).then(create)


let create = async (answers) => {
    if (answers.type == 'default') {
        answers.content = `# ${answers.title}`;
    } else if (answers.type == 'lorem markdown') {
        answers.content = await new Promise((resolve, reject) => {
            https.get('https://jaspervdj.be/lorem-markdownum/markdown.txt?fenced-code-blocks=on', (resp) => {
                let data = '';

                resp.on('data', (chunk) => {
                    data += chunk;
                });

                resp.on('end', () => {
                    resolve(data);
                });

            }).on("error", (err) => {
                console.log("Error: " + err.message);
                reject(err.message)
            });
        })
    }

    let template = fs.readFileSync('./tools/templates/post.md', 'utf8')

    let output = mustache.render(template, answers);
    fs.mkdirSync(`${base}${answers.slug}`, { recursive: true });
    fs.writeFileSync(`${base}${answers.slug}/index.svelte.md`, output, {encoding: 'utf-8'})
}

// for(let i = 0; i < 100; i++) {
//     var date = new Date('January 1 2020');
//     date.setDate(date.getDate() + i)

//     let answers = {
//         title: `Test Post ${i}`,
//         slug: `test-post-${i}`,
//         description: 'Test Post Please Ignore',
//         author: 'Hayden Mankin',
//         date: date.toISOString(),
//         categories: ['Lorem Ipsum'],
//         tags: ['lorem ipsum'],
//         type: 'lorem markdown',
//         content: ''
//     }

//     create(answers);
// }