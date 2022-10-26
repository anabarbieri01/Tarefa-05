import { Component, OnInit } from '@angular/core';
import { Aluno } from '../Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  //aluno = 'Lucas';
  aluno: Aluno = {
    id: 1,
    name: 'João',
    sexo: 'Masculino',
    idade: 23
  };

  constructor() { }

  ngOnInit(): void {
  }

}
