/* eslint-disable no-undef */
import Carrinho from '../carrinho';
import Item from '../item';

describe('Testes do Carrinho', () => {
  test('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();

    expect(carrinho.subtotal).toBeNull();
    expect(carrinho.frete).toBeNull();
    expect(carrinho.total).toBeNull();
  });

  test('Deve ter itens', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Maca', 0.5, 1);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);
  });

  test('Deve ter a propriedade "total" na icicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });

  test('Deve lançar erro ao finalizar compra com carrinho vazio', () => {
    const englobaErroCarrinho = () => {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    };

    expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio');
  });

  test('Deve adicionar o frete', () => {
    const carrinho = new Carrinho();
    const valorFrete = 300;
    carrinho.adicionaFrete(valorFrete);

    expect(valorFrete).toBe(carrinho.frete);
  });

  test('Deve calcular o subtotal', () => {
    const carrinho = new Carrinho();
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Maca', 0.5, 2);

    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(300);

    expect(311).toBe(carrinho.calculaTotal());
  });

  test('Deve finalizar a compra e retornar o valor do frete e o valor total', () => {
    const carrinho = new Carrinho();
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Maca', 0.5, 2);

    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(300);

    const compraFinalizada = {
      subtotal: 11,
      frete: 300,
      total: 311,
    };

    expect(compraFinalizada).toStrictEqual(carrinho.finalizaCompra());
  });
});
