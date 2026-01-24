
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export enum ServiceCategory {
  TECHNICAL_SALES = 'Vendas Técnicas',
  PAINTING = 'Pintura',
  MEI_SERVICES = 'Serviços MEI',
  TRANSPORT = 'Transporte'
}
