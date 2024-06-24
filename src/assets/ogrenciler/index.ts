const images = import.meta.glob('./*.jpeg');

const loadImages = async () => {

    console.log("IMMMMMMMMM", images)
    const imageModules = await Promise.all(
        Object.entries(images).map(([path, resolver]) => resolver().then(mod => ({ path, mod })))
    );

    return imageModules.map(({ path, mod }: any) => ({
        path,
        src: mod.default,
    }));
};

export default loadImages;