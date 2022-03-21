
export const pareseRequestUrl = ()=>{
    const url= document.location.hash.toLocaleLowerCase();
    const splitUrl = url.split('/');

    return {
        resource : splitUrl[1],
        id : splitUrl[2],
        action : splitUrl[3],
    }
}