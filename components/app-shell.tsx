'use client'

import React, { useState } from 'react'
import { FileText, Database, BarChart2, GitBranch, PieChart, User, Table, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  color: string;
  subItems: string[];
}

interface MenuItemProps {
  item: MenuItem;
  isActive: boolean;
  onClick: (sectionName: string) => void;
  isCollapsed: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, isActive, onClick, isCollapsed }) => (
  <div className="mb-1">
    <button
      className={`w-full flex items-center justify-between px-4 py-2 text-left transition-colors ${
        isActive ? `bg-gray-200 text-gray-800` : 'hover:bg-gray-100'
      }`}
      onClick={() => onClick(item.name)}
    >
      <span className="flex items-center">
        {React.cloneElement(item.icon as React.ReactElement, { className: `h-5 w-5 ${item.color}` })}
        {!isCollapsed && <span className="ml-2">{item.name}</span>}
      </span>
      {!isCollapsed && <ChevronDown className="h-4 w-4" />}
    </button>
    {isActive && !isCollapsed && (
      <div className="pl-8 pr-2">
        {item.subItems.map((subItem) => (
          <button
            key={subItem}
            className="w-full text-left py-1 text-sm hover:bg-gray-100"
            onClick={() => onClick(`${item.name} - ${subItem}`)}
          >
            {subItem}
          </button>
        ))}
      </div>
    )}
  </div>
)

export function AppShellComponent() {
  const [activeSection, setActiveSection] = useState<string>('Archivo')
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const menuItems: MenuItem[] = [
    {
      name: 'Archivo',
      icon: <FileText />,
      color: 'text-blue-500',
      subItems: [
        'Importar conjuntos de datos',
        'Visualizar el conjunto de datos',
        'Preferencias de la aplicación',
        'Guardar archivos'
      ]
    },
    {
      name: 'Procesamiento de datos',
      icon: <Database />,
      color: 'text-green-500',
      subItems: [
        'Limpieza de datos',
        'Agregar columnas del conjunto de datos',
        'Eliminar columnas específicas',
        'Modificar columnas',
        'Modificar datos'
      ]
    },
    {
      name: 'Estadística',
      icon: <BarChart2 />,
      color: 'text-purple-500',
      subItems: ['Media', 'Mediana', 'Moda', 'Desviación Estándar']
    },
    {
      name: 'Cruce de variables',
      icon: <GitBranch />,
      color: 'text-orange-500',
      subItems: [
        'Consulta de cruce de Variable a variable',
        'Consulta de rango de variables',
        'Consulta de un conjunto de datos a una variable',
        'Consulta de un dato a una variable'
      ]
    },
    {
      name: 'Mostrar Datos',
      icon: <Table />,
      color: 'text-pink-500',
      subItems: [
        'Ver Tabla',
        'Buscar',
        'Paginar'
      ]
    },
    {
      name: 'Gráficos',
      icon: <PieChart />,
      color: 'text-yellow-500',
      subItems: [
        'Generar gráficos por columna',
        'Personalizar gráficos'
      ]
    },
    {
      name: 'Usuario',
      icon: <User />,
      color: 'text-teal-500',
      subItems: [
        'Perfil',
        'Configuración',
        'Preferencias'
      ]
    }
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white shadow-md overflow-y-auto transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
        <div className="p-4 border-b flex justify-between items-center">
          {!isCollapsed && <h1 className="text-2xl font-bold text-blue-600">EstadísticaApp</h1>}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)} 
            className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
            aria-label={isCollapsed ? "Expandir menú" : "Colapsar menú"}
          >
            {isCollapsed ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
          </button>
        </div>
        <nav className="mt-4">
          {menuItems.map((item) => (
            <MenuItem
              key={item.name}
              item={item}
              isActive={activeSection.startsWith(item.name)}
              onClick={setActiveSection}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">{activeSection}</h2>
          <div className="flex items-center gap-4">
            <input
              type="search"
              placeholder="Buscar..."
              className="w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100">
              <FileText className="h-5 w-5 text-blue-500" />
            </button>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="h-full overflow-auto">
            {/* Placeholder content */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-4">Contenido de {activeSection}</h3>
              <p className="text-gray-600">
                Aquí se mostrará el contenido específico de la sección {activeSection}.
                Incluye funcionalidades como arrastrar y soltar datos, opciones de
                configuración, y visualizaciones según la sección seleccionada.
              </p>
              {/* Tip or tutorial */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded p-4">
                <h4 className="text-sm font-medium text-blue-800 mb-2">Tip rápido</h4>
                <p className="text-sm text-blue-700">
                  Para comenzar con {activeSection}, prueba a...
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}