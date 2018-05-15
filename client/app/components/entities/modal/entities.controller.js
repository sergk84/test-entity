class entitiesController {
  constructor($mdDialog, items) {
    'ngInject';

    this.items = items;
    this.close = function() {
      $mdDialog.hide();
    };

  }
}

export default entitiesController;
