export const resizedImage = (imagePath, size) => {
    const image = imagePath.match(/media/) && imagePath.replace("/media/games/",`/media/resize/${size}/-/games/`);
    return image;    
}