app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: "Bruschetta",
      description: "Grilled bread garlic, tomatoes, olive oil.",
      price: 4.95
    }
  ];
  $scope.mains = [
  {
    name: "Margherita",
    description: "Tomato, basil and fresh Mozzarella",
    price: 6.95
  },
  {
    name: "Meat Lovers",
    description: "For serious carnivores only: sausage, ham, bacon, pepperoni.",
    price: 9.95
  }
  ]
}]);