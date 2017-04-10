import { Deivid } from './../Deivid/Deivid';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-segmentedControl',
	templateUrl: 'segmentedControl.html'
})
export class SegmentedControl {
	public items;
	public zone;
	public nombre;
	public listaDeNombres;
	public modeKeys;
	public segmento: string;
	public event = {
		month: new Date().toISOString(),
		timeStarts: new Date().toISOString(),
		timeEnds: '1990-02-20'
	}
	public enableButton: string;
	public listadoDeOpciones;

	constructor(public navCtrl: NavController) {

		this.initializeItems();
		this.segmento = "SearchBar";
		this.nombre = "Carlos";
		this.inicializarNombres();
		this.zone = {
			kind: 'key2'
		}
		this.modeKeys = [
			'key1',
			'key2',
			'key3',
			'key4',
		]
		this.listadoDeOpciones = [
			'Yes',
			'No',
		];
	}

	inicializarNombres() {
		this.listaDeNombres = ['Raulsito', 'Robertitop', 'LaLoLa'];
	}

	initializeItems() {
		this.items = [
			'Amsterdam',
			'Bogota',
			'Buenos Aires',
			'Cairo',
			'Dhaka',
			'Edinburgh',
			'Geneva',
			'Genoa',
			'Glasglow',
			'Hanoi',
			'Hong Kong',
			'Islamabad',
			'Istanbul',
			'Jakarta',
			'Kiel',
			'Kyoto',
			'Le Havre',
			'Lebanon',
			'Lhasa',
			'Lima',
			'London',
			'Los Angeles',
			'Madrid',
			'Manila',
			'New York',
			'Olympia',
			'Oslo',
			'Panama City',
			'Peking',
			'Philadelphia',
			'San Francisco',
			'Seoul',
			'Taipeh',
			'Tel Aviv',
			'Tokio',
			'Uelzen',
			'Washington'
		];
	}
scasdxas
	MuestraAlDeivid(){
		this.navCtrl.push(Deivid)
	}

	cambiarBoton(valorElegido){
		this.enableButton = valorElegido;
	}

}
