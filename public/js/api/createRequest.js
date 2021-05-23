/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {

    const xhr = new XMLHttpRequest();
    if (options.method === `GET`) {
        const arr = [];
         if(options.data){
            
            for(let i of Object.entries(options.data)){
                const key = i[0],
                value = i[1];
                arr.push(`${key}=${value}`);
            }
         }
        console.log( options.data);
        xhr.open(`GET`, options.url)
        xhr.responseType = options.responseType;
        xhr.withCredentials = true;
        xhr.send();
    } else {
        xhr.open(options.method, options.url);
        xhr.responseType = options.responseType;
        const formData = new FormData();
        
        for (let i of Object.entries(options.data)){
            const key = i[0],
            value = i[1];
            formData.append(`${key}`, `${value}`);


        }
        xhr.send(formData);

    }
    xhr.onload = () => options.callback(xhr.err, xhr.response);

};