const imgCache = {
    __cache: {},
    read(src) {
        if (!src) {
            return;
        }
        
        if (!this.__cache[src]) {
            this.__cache[src] = new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    this.__cache[src] = true;
                    resolve(this.__cache[src]);
                };
                img.src = src;
                setTimeout(() => resolve({}), 7000);
            }).then((img) => {
                this.__cache[src] = true;
            });
        }

        if (this.__cache[src] instanceof Promise) {
            console.log(src+" loading");
            throw this.__cache[src];
        }
        console.log(src+" completed loading");
        return this.__cache[src];
    },
};

export default imgCache;