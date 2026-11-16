import React from 'react';
import { Hero } from '@/components/Hero';
import { WarehouseNetwork } from '@/components/WarehouseNetwork';
import { ProductList } from '@/components/ProductList';
import { PackagingSection } from '@/components/PackagingSection';
import { CharityActivityGallery } from '@/components/CharityActivityGallery';
import { GoogleReviews } from '@/components/GoogleReviews';
import { PolicyCommitments } from '@/components/PolicyCommitments';
import { CharityGuideAndFAQ } from '@/components/CharityGuideAndFAQ';
import { FastQuoteForm } from '@/components/FastQuoteForm';
import { CTABox, JsonLd } from '@/components/content';
import { RICE_PRODUCTS } from '@/data/mockData';
import { HOME_FAQS } from '@/data/site';
import { faqSchema, productListSchema, serviceSchema } from '@/lib/schema';

export default function Home() {
  return (
    <>
      <JsonLd data={serviceSchema()} />
      <JsonLd data={productListSchema(RICE_PRODUCTS)} />
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <Hero />
      <WarehouseNetwork />
      <ProductList />
      <PackagingSection />
      <CharityActivityGallery />
      <GoogleReviews />
      <PolicyCommitments />
      <CharityGuideAndFAQ />
      <FastQuoteForm />
      <CTABox currentPath="/" />
    </>
  );
}
