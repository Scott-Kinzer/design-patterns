const EventEmitter = require('events');

class EventBulder extends EventEmitter {
    constructor(executor: (func: (eventName: string | symbol, ...args: any[]) => boolean) => void) {
        super();
        const emit = this.emit.bind(this);

        executor(emit);
    }
}

let interval: NodeJS.Timer;

const eventBuilder = new EventBulder((emit) => {
    let count = 0;

    interval = setInterval(() => {
        emit('tick', ++count);
    }, 1000)
});


eventBuilder.on('tick', (count: number) => {
    console.log('count:', count);

    if (count === 10) {
        clearInterval(interval);
    }
})