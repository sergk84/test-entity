import entitiesTemplate from './modal/entities.html';
import entitiesController from './modal/entities.controller';

class EntitiesController {
  constructor(entitiesService, $mdDialog) {
    'ngInject';

    this.items = entitiesService.items;

    this.addEntities = function(ev) {
      $mdDialog.show({
        controllerAs : '$ctrl',
        controller: entitiesController,
        template: entitiesTemplate,
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        locals: {
          items: this.items
        }
      });
    };

    this.statusFilter = function(value){
      return value.status;
    };

  }
}

export default EntitiesController;
