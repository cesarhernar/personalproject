
angular.module('signincontroller', ['ngRoute', 'userFactory'])
  .controller('signincontroller', ['$route', 'userFactory', '$http', 'SocketService', signincontroller]);




function signincontroller($route, userFactory, $http, socketservice) {
  this.disp = 'this is a test';
  this.user = '';
  this.password
  this.redi = () => {
    socketservice.eventEmitter('signin')
    userFactory.setdata(this.user, this.password);
    window.location.replace('/#/blog');
    this.user = '';
    this.password = '';
  //   var req = {
  //   method: 'POST',
  //   url: '/signin',
  //   type: {
  //     'Content-Type': 'application/json'
  //   },
  //   data: JSON.stringify({ user: this.user, password: this.password })
  // }
  //   $http(req).then((response) => {
  //     if (response.data) {
  //     }
  //     else {
  //       }
  // })
  }
}
