// src/App.tsx
import { useState, useEffect, useMemo, ChangeEvent } from 'react';
import { Chart } from 'react-google-charts';
import { mockData } from './data';
import './App.css'; // Mantenha o import do CSS

function App() {
  const [selectedCategoria, setSelectedCategoria] = useState<string>('');
  const [selectedProduto, setSelectedProduto] = useState<string>('');
  const [selectedMarca, setSelectedMarca] = useState<string>('');

  const produtosOptions = useMemo(() => {
    if (!selectedCategoria) return [];
    return mockData.produtosPorCategoria[selectedCategoria] || [];
  }, [selectedCategoria]);

  const marcasOptions = useMemo(() => {
    if (!selectedProduto) return [];
    return mockData.marcasPorProduto[selectedProduto] || [];
  }, [selectedProduto]);

  useEffect(() => {
    if (produtosOptions.length > 0) {
      setSelectedProduto(produtosOptions[0].id);
    } else {
      setSelectedProduto('');
    }
  }, [selectedCategoria, produtosOptions]);

  useEffect(() => {
    if (marcasOptions.length > 0) {
      setSelectedMarca(marcasOptions[0].id);
    } else {
      setSelectedMarca('');
    }
  }, [selectedProduto, marcasOptions]);

  useEffect(() => {
    if (mockData.categorias.length > 0 && !selectedCategoria) {
      setSelectedCategoria(mockData.categorias[0].id);
    }
  }, []);

  const chartData = useMemo(() => {
    const defaultData = [
      ['Mês', 'Vendas'],
      ['Jan', 0],
      ['Fev', 0],
      ['Mar', 0],
      ['Abr', 0],
    ];

    if (!selectedProduto || !selectedMarca) {
      return defaultData;
    }

    const key = `${selectedProduto}_${selectedMarca}`;
    const vendas = mockData.vendasPorMarcaProduto[key];

    if (!vendas) {
      return defaultData;
    }

    return [
      ['Mês', 'Vendas'],
      ['Jan', vendas[0]],
      ['Fev', vendas[1]],
      ['Mar', vendas[2]],
      ['Abr', vendas[3]],
    ];
  }, [selectedProduto, selectedMarca]);

  const chartOptions = {
    title: `Sales By Month for:`, // Título do gráfico mais genérico, o detalhe fica no h2
    curveType: 'none', // Linha reta
    legend: { position: 'bottom' },
    hAxis: { title: 'Meses', textPosition: 'out' }, // Alinha texto embaixo do eixo
    vAxis: { title: 'Vendas', minValue: 0, maxValue: 1000 },
    pointSize: 5,
    colors: ['#5692D1'], // Uma cor azul parecida com a do modelo
    chartArea: { width: '85%', height: '70%' }, // Ajusta a área do gráfico
    tooltip: { trigger: 'focus' }, // Tooltip ao focar no ponto
    lineWidth: 2, // Espessura da linha
  };

  const handleCategoriaChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategoria(event.target.value);
  };

  const handleProdutoChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduto(event.target.value);
  };

  const handleMarcaChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMarca(event.target.value);
  };

  return (
    <div className="app-container"> {/* Container principal para o layout */}
      {/* Top Bar */}
      <header className="top-bar">
        <div className="menu-section">
          <span className="menu-icon">☰</span>
          <span className="menu-text">Menu</span>
        </div>
        <div className="user-section">
          <span className="user-dot"></span>
          <span className="user-name">User Name</span>
        </div>
        <div className="report-title">
          <span>Sales Report</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        <div className="controls-container">
          <div className="select-group">
            <label htmlFor="categoria-select">Categoria:</label>
            <select id="categoria-select" value={selectedCategoria} onChange={handleCategoriaChange}>
              {mockData.categorias.map(categoria => (
                <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
              ))}
            </select>
          </div>

          <div className="select-group">
            <label htmlFor="produto-select">Produto:</label>
            <select id="produto-select" value={selectedProduto} onChange={handleProdutoChange} disabled={produtosOptions.length === 0}>
              {produtosOptions.length > 0 ? (
                produtosOptions.map(produto => (
                  <option key={produto.id} value={produto.id}>{produto.nome}</option>
                ))
              ) : (
                <option value="">Selecione uma categoria</option>
              )}
            </select>
          </div>

          <div className="select-group">
            <label htmlFor="marca-select">Marca:</label>
            <select id="marca-select" value={selectedMarca} onChange={handleMarcaChange} disabled={marcasOptions.length === 0}>
              {marcasOptions.length > 0 ? (
                marcasOptions.map(marca => (
                  <option key={marca.id} value={marca.id}>{marca.nome}</option>
                ))
              ) : (
                <option value="">Selecione um produto</option>
              )}
            </select>
          </div>
        </div>

        {/* Título dinâmico para o gráfico */}
        <h2 className="chart-subtitle">
          Sales By Month for:{" "}
          <span className="selected-item-detail">
            {mockData.categorias.find(c => c.id === selectedCategoria)?.nome} &gt;{" "}
            {mockData.produtosPorCategoria[selectedCategoria]?.find(p => p.id === selectedProduto)?.nome} &gt;{" "}
            {mockData.marcasPorProduto[selectedProduto]?.find(m => m.id === selectedMarca)?.nome}
          </span>
        </h2>


        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={chartData}
          options={chartOptions}
          loader={<div>Carregando Gráfico...</div>}
          errorElement={<div>Erro ao carregar o gráfico.</div>}
        />
      </div>
    </div>
  );
}

export default App;