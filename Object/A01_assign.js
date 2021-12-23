try {
    const book = { title: "책" };
    const sports = { item: "축구" }
    const obj = Object.assign({}, book, sports);
    console.log(obj)

} catch (err) {
    console.log(err)
}