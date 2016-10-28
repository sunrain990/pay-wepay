/**
 * Created by kevin on 16/8/24.
 */
let _ = require('lodash')
let arr = {
    uid: 123,
    student_id: 7758,
    school_id: 5877,
    username: "hxcccc10",
    password: "hxcccc",
    real_name: "hxchuan",
    email: "hxc@bobo.com",
    admin_type: 0,
    openapi: true
}

let gg = {
    description: 'req.description',
    difficulty: 'req.difficulty',
    hint: "<p>this is hint<br></p>",
    id: '-1',
    uid: 2,
    input_description: 'req.input_description',
    memory_limit: 'req.memory_limit',
    output_description: 'req.output_description',
    samples: 'req.samples',
    source: 'from xmgc',
    spj: false,
    tags: ["notag"],
    test_case_id: "058811aa9505763ae5c84163f0fe29ce",
    time_limit: 'req.time_limit',
    title: 'req.title',
    visible: true
}

let gob = _.merge(arr,gg)
console.log(gob)