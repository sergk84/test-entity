import angular from 'angular';
import EntitiesService from './entities.service';
import EntitiesComponent from './entities.component';

let EntitiesModule = angular.module('entities', [])

.service('entitiesService', EntitiesService)
.component('entitiesComponent', EntitiesComponent)

.name;

export default EntitiesModule;
