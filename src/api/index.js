import page from '@/assets/json/page.json';
import contents from '@/assets/json/contents.json';

export const GET_PAGE = () => {
    return new Promise((resolve, reject) => {
        return resolve({done: true, page})
    })
}

export const GET_ALL_CONTENTS = () => {
    return new Promise((resolve, reject) => {
        return resolve({done: true, contents})
    })
}
export const GET_CONTENT_BY_ID = (id) => {
    return new Promise((resolve, reject) => {
        return resolve({done: true, content: contents.find(content => content.id === id)})
    })
}