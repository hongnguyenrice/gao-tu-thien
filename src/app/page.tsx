import React from 'react';
import { Hero } from '@/components/Hero';
import { WarehouseNetwork } from '@/components/WarehouseNetwork';
import { ProductList } from '@/components/ProductList';
import { CharityActivityGallery } from '@/components/CharityActivityGallery';
import { PolicyCommitments } from '@/components/PolicyCommitments';
import { CharityGuideAndFAQ } from '@/components/CharityGuideAndFAQ';
import { FastQuoteForm } from '@/components/FastQuoteForm';
import { CTABox } from '@/components/content';

export default function Home() {
  return (
    <>
      <Hero />
      <WarehouseNetwork />
      <ProductList />
      <CharityActivityGallery />
      <PolicyCommitments />
      <CharityGuideAndFAQ />
      <FastQuoteForm />
      <CTABox currentPath="/" />
    </>
  );
}
