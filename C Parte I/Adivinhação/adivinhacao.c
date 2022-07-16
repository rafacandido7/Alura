#include <stdio.h>

#define NUMERO_TENTATIVA 5

int main () {

	//Imprime o cabeçalho do nosso jogo.
	printf("******************************************\n");
	printf("* Bem vindo ao nosso jogo de adivinhação *\n");
	printf("******************************************\n");

	int numerosecreto = 42;

	int chute;

	//Estrutura de Repetição.
    int i;
	for (i = 1; i<=NUMERO_TENTATIVA; i++) {

		printf("Tentativa %d de %d \n", i, NUMERO_TENTATIVA);

		printf("Qual é o seu chute? ");
		scanf("%d", &chute);

		if (chute < 0) {
			printf("Você não pode inserir números negativos!\n");
			i--;
			
			continue;
		}

		printf("O seu chute foi %d.\n", chute);

		int acertou = (chute == numerosecreto);
        int maior = chute > numerosecreto;
        int menor = chute < numerosecreto;

        if(acertou) {
            printf("Parabéns! Você acertou!\n");
            printf("Jogue de novo, você é um bom jogador!\n");

            break;
			// Interromper o loop
        } else if(maior) {
            printf("Seu chute foi maior que o número secreto\n");
		}
        if(menor) {
            printf("Seu chute foi menor que o número secreto\n");
        }
    }
	
	printf("Fim de jogo!\n");

	return 0;
}