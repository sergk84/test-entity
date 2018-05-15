import angular from 'angular';
import Home from './home/home';
import EntitiesModule from './entities/entities';

let componentModule = angular.module('app.components', [
  Home,
  EntitiesModule
])

.name;

export default componentModule;
