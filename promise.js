const asyncUppercase = item =>
    new Promise(resolve =>
        setTimeout(
            () => resolve(item.toUpperCase()),
            Math.floor(Math.random() * 1000)
        )
    );

const uppercaseItems = async () => {
    const items = ['a', 'b', 'c'];

    for (const item of items) {
        let res = await asyncUppercase(item)
        console.info('res:', res)
    }

    await Promise.all(
        items.map(async (item) => {
            let res = await asyncUppercase(item)
            console.info('res2:', res)
        })
    )

    console.log('Items processed');
};

uppercaseItems()
