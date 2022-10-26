import { Component, OnInit } from '@angular/core';
import { Aluno } from '../Aluno';
import { ALUNOS } from '../mock-alunos';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  aluno: Aluno = {
    id: 1,
    name: 'João',
    sexo: 'Masculino',
    idade: 23
  };

  alunos = ALUNOS;

  selectedAluno?: Aluno;
  onSelect(Aluno: Aluno): void {
    this.selectedAluno = Aluno;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
