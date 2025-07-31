// src/data.ts

export const mockData = {
  categorias: [
    { id: 'eletronicos', nome: 'Eletrônicos' },
    { id: 'vestuario', nome: 'Vestuário' },
    { id: 'alimentos', nome: 'Alimentos' },
  ],
  produtosPorCategoria: {
    eletronicos: [
      { id: 'smartphone', nome: 'Smartphone' },
      { id: 'notebook', nome: 'Notebook' },
      { id: 'tv', nome: 'Smart TV' },
    ],
    vestuario: [
      { id: 'camiseta', nome: 'Camiseta' },
      { id: 'calca', nome: 'Calça Jeans' },
      { id: 'sapato', nome: 'Tênis Esportivo' },
    ],
    alimentos: [
      { id: 'frutas', nome: 'Frutas Frescas' },
      { id: 'laticinios', nome: 'Laticínios' },
      { id: 'graos', nome: 'Grãos' },
    ],
  },
  marcasPorProduto: {
    smartphone: [
      { id: 'marcaA', nome: 'TechCorp' },
      { id: 'marcaB', nome: 'GlobalCom' },
    ],
    notebook: [
      { id: 'marcaC', nome: 'ProCompute' },
      { id: 'marcaD', nome: 'UltraPort' },
    ],
    tv: [
      { id: 'marcaE', nome: 'VisualMax' },
      { id: 'marcaF', nome: 'ScreenFlow' },
    ],
    camiseta: [
      { id: 'marcaG', nome: 'StyleWear' },
      { id: 'marcaH', nome: 'CasualFit' },
    ],
    calca: [
      { id: 'marcaI', nome: 'DenimMaster' },
      { id: 'marcaJ', nome: 'JeansPro' },
    ],
    sapato: [
      { id: 'marcaK', nome: 'SportStride' },
      { id: 'marcaL', nome: 'ActiveFoot' },
    ],
    frutas: [
      { id: 'marcaM', nome: 'NatureFarm' },
      { id: 'marcaN', nome: 'FreshHarvest' },
    ],
    laticinios: [
      { id: 'marcaO', nome: 'DairyDelight' },
      { id: 'marcaP', nome: 'MilkyWay' },
    ],
    graos: [
      { id: 'marcaQ', nome: 'GrainHarvest' },
      { id: 'marcaR', nome: 'PureGrains' },
    ],
  },
  // Dados de vendas simulados para o gráfico
  vendasPorMarcaProduto: {
 'smartphone_marcaA': [100, 980, 50, 850], // Salto grande de Jan para Fev, queda em Mar
    'smartphone_marcaB': [900, 150, 950, 200], // Montanha russa
    'notebook_marcaC': [50, 700, 100, 990],
    'notebook_marcaD': [800, 50, 900, 100],
    'tv_marcaE': [10, 450, 980, 50],
    'tv_marcaF': [950, 20, 800, 100],
    'camiseta_marcaG': [500, 100, 700, 50],
    'camiseta_marcaH': [100, 800, 50, 750],
    'calca_marcaI': [700, 50, 850, 100],
    'calca_marcaJ': [50, 600, 10, 700],
    'sapato_marcaK': [900, 100, 700, 150],
    'sapato_marcaL': [100, 950, 50, 800],
    'frutas_marcaM': [400, 20, 500, 30],
    'frutas_marcaN': [30, 400, 10, 380],
    'laticinios_marcaO': [200, 10, 300, 20],
    'laticinios_marcaP': [10, 250, 5, 200],
    'graos_marcaQ': [150, 5, 180, 10],
    'graos_marcaR': [5, 100, 2, 90],
  },
};