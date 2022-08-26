#include <stdio.h>

int main () {

	//Imprime o cabeçalho do nosso jogo.
	printf("******************************************\n");
	printf("* Bem vindo ao nosso jogo de adivinhação *\n");
	printf("******************************************\n");

	int numeroSecreto = 42;
	int chute;
	int ganhou = 0; //boolean
	int points = 1000;

	//Estrutura de Repetição.

    int i = 1;
	while (ganhou == 0) {
		printf("Tentativa %d\n", i);
		printf("Qual é o seu chute? ");
		scanf("%d", &chute);
		if (chute < 0) {
			printf("Você não pode inserir números negativos!\n");
			continue;
		}
		printf("O seu chute foi %d.\n", chute);
		if(chute == numeroSecreto) {
			printf("Parabéns! Você acertou!\n");
			printf("Jogue de novo, você é um bom jogador!\n");
			ganhou = 1;
			// Interromper o loop
		} else if(chute > numeroSecreto) {
			printf("Seu chute foi maior que o número secreto.\n");
		} else if(chute < numeroSecreto) {
			printf("Seu chute foi menor que o número secreto.\n");
		}else {
			printf("Você errou, tente novamente!\n");
		}
		i++;
		int newPoints = (chute - numeroSecreto)/2;
		points += newPoints;
		}

		
    
	printf("Você acertou na %d tentativa.\n", i);
	printf("Você fez %d pontos.\n", points);
	printf("Fim de jogo!\n");

	return 0;
}