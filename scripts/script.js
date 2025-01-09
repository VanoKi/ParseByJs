(() => {
    function foo() {
        console.log('Hello world!')
    }
    globalThis.myModule = {
        foo
    }
})()
globalThis.myModule.foo()