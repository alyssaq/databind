Data Bind
=======

A place to play with data bind

##Publisher/Subscriber Example

Create 2 callbacks

```javascript
var msg1 = function ( data ) {
    console.log( "First Logging: " + data );
};

var msg2 = function ( data ) {
    console.log( "Second Logging: " + data );
};
```

Subscribe the callbacks to one event `msg`
```javascript
pubsub.sub( "msg", msg1 );
pubsub.sub( "msg", msg2 );
```

Publish the message when the event is called
````javascript
pubsub.pub("msg", "hello there");
```
Output:
````javascript
First Logging: hello there
Second Logging: hello there 
```