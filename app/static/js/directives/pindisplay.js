angular.module('duinoflask').directive('pinsDisplay',function(){
        return {
            restrict: "EA",
            replace:true,
            scope:{
                state: '=',
                onLabel:"@",
                offLabel:"@",
                updateState: '&updateState',
                pinId: '=',
                pinName: '='

            },

            link: function(scope,element,attr){
                scope.$watch("state", function(value) {
                    if((value !== null)&&(value !== undefined)&&(value !== ''))
                    {
                      if((value === "true")||(value === true))
                        {
                            var tag = "<button type='button' class='btn btn-primary btn-lg btn-block' >- ON -</button>";
                            if (element.children.length > 0)
                                element.empty();
                            element.append(tag);
                        }
                        else if((value === "false")||(value === false))
                            {
                                var tag = "<button type='button' class='btn btn-danger btn-lg btn-block'>- OFF -</button>";
                                if (element.children.length > 0)
                                    element.empty();
                                element.append(tag);

                            }
                      else
                      {
                          var tag = "<button type='button' class='btn btn-warning btn-lg btn-block'>- No State -</button>";
                          if (element.children.length > 0)
                              element.empty();
                          element.append(tag);

                      }

                    }
                });
                element.click(function() {
                    scope.$apply(function() {
                        if(scope.state === "true") scope.state = true;
                        else if(scope.state === "false")scope.state = false;

                        scope.state = !scope.state;
                        scope.updateState({state: scope.state,
                        id:scope.pinId,name:scope.pinName});
                    });
                });


        }
       }
    });