//subject

class YoutubeChannel{
    constructor(name){
        this.name = name;
        this.subscribers = [];
    }

    subscribe(user){
        this.subscribers.push(user);
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter(sub => sub !== user);
    }
    uploadvideo(title){
        console.log(`${this.name} uploaded : ${title}`);
        this.notify(title);
    }
    notify(videotitle){
        this.subscribers.forEach(sub => sub.update(videotitle));
    }
}

//observer
class User{
    constructor(name){
        this.name = name;
    }

    update(videotitle){
        console.log(`${this.name} got notification abot new video: ${videotitle}`);
    }
}

const techchannel = new YoutubeChannel("Yoga");
let user1 = new User("vivek");
let user2 = new User("raj");
let user3 = new User("meena");

techchannel.subscribe(user1);
techchannel.subscribe(user2);
techchannel.subscribe(user3);

techchannel.uploadvideo("observer pattern is explained..")
