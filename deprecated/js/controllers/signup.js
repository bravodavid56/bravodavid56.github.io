angular
    .module("SignupCtrl", [])
    .controller('SignupController', function($scope) {
        // each module should have this format
        // { modname: "", modwebsite: "", groups: [ { fname: "", lname: "", email: "" } {...} ] , place:}
        // modname is the module name
        // modwebsite is the website for the module
        // groups is the group for this specific module
        // place indicates a group number 
        // if 0; then there are no duplicates
        // if >0; then there ARE duplicates and 
        // place indicates where in the set this module lies
        // i.e. is it the first, second, third, etc
        $scope.modules = []
        $scope.showAdd = true
        $scope.showSignup = true

        function countLetters(n) {
            const set = {}
            for (let i = 0; i < n.length; i++) {
                const key = n[i].modname
                if (set[key] == undefined) {
                    set[key] = 1
                } else {
                    set[key] = set[key] + 1
                }
            }
            // console.log(set)
            return set
        }
        let set = countLetters($scope.modules)


        $scope.addModule = () => {
            let dupe = false
            set = countLetters($scope.modules)

            angular.forEach($scope.modules, function(current) {
                if ($scope.modname.toUpperCase() === current.modname) {
                    current.dupe = true
                    if (current.place == 0) {
                        current.place += 1
                    }
                }
            })


            // create a set of modules with the amount of times they appear
            if (set[$scope.modname.toUpperCase()] == undefined) {
                $scope.modules.push({
                    modname: $scope.modname.toUpperCase(),
                    modwebsite: $scope.modweb,
                    groups: [],
                    place: 0
                })
            } else {
                $scope.modules.push({
                    modname: $scope.modname.toUpperCase(),
                    modwebsite: $scope.modweb,
                    groups: [],
                    place: set [$scope.modname.toUpperCase()] + 1,
                    dupe: true
                })
            }


            // alphabetizes the modules
            let count = 0
            $scope.modules = $scope.modules.sort(function(a, b) {
                let arr = []
                arr.push(a.modname)
                arr.push(b.modname)
                arr = arr.sort()
                if (arr[0] === arr[1]) {
                    return 0
                } else if (arr[0] === a.modname) {
                    return -1
                } else {
                    return 1
                }
            })

        }
        $scope.addStudents = () => {
            angular.forEach($scope.modules, function(x) {
                let check = $scope.modOption.slice(-1)
                if ($scope.modOption.length == 1) {
                    let regex = new RegExp(x.modname)
                    if (regex.test($scope.modOption)) {
                        x.groups.push({ fname: $scope.stuFName, lname: $scope.stuLName, email: $scope.stuEmail })
                    }
                } else if (isNaN(check * 0)) {
                    let regex = new RegExp(x.modname)
                    if (regex.test($scope.modOption)) {
                        x.groups.push({ fname: $scope.stuFName, lname: $scope.stuLName, email: $scope.stuEmail })
                    }

                } else {
                    let temp = $scope.modOption
                    $scope.pick = temp.slice(-1)
                    let regex = new RegExp(x.modname)
                    if (regex.test($scope.modOption))
                        if (x.place == $scope.pick) {
                            x.groups.push({ fname: $scope.stuFName, lname: $scope.stuLName, email: $scope.stuEmail })
                        }
                }



            })
        }
        $scope.deleteModule = (module) => {
            // get the base name of modname e.g. "CHALK - 1" gets "CHALK"
            let basename = module.modname.slice(0)

            // get the place of this module
            let place = module.place

            // removing the module at this index
            let index = $scope.modules.indexOf(module)
            $scope.modules.splice(index, 1)

            // update the modules with the same name that are after this one
            // for example, if group 2 gets deleted out of 4 groups,
            // then groups 3 and 4 should have their places decremented by 1
            angular.forEach($scope.modules, function(x) {
                if (x.modname === module.modname) {
                    if (x.place > place) {
                        x.place -= 1
                    }
                }
            })

            // if you delete one of a pair of duplicates, then update the place value
            // of the remaining of the pair to reflect it's sole existence 

            angular.forEach($scope.modules, function(y, i) {
                let islonewolf = true
                angular.forEach($scope.modules, function(z, j) {
                    if (i === j) {
                    } else if (y.modname === z.modname) {
                        islonewolf = false
                    }
                })
                if (islonewolf) {
                    y.dupe = false
                    y.place = 0
                }
            })

        }

        // deleting a student
        $scope.deleteStudent = (student, module) => {
            angular.forEach(module.groups, function(a, b) {
                if (a.fname == student.fname && a.lname == student.lname &&
                    a.email == student.email) {
                    module.groups.splice(b, 1)
                }
            })
        }
    })
