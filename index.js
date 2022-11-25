function receivesAFunction(callBackfunction) {
 callBackfunction ();//named callbackfunction callBackfunction

};

function returnsANamedFunction(){
return receivesAFunction;//used previous function as return
};

function returnsAnAnonymousFunction(){
    return function;//nameless function
}