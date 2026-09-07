import { BREW_ARTICLES } from './brewArticles'
import { DISTILL_ARTICLES } from './distillArticles'
import { DISTILL_DEEP_ARTICLES } from './distillDeepArticles'
import { FERMENT_ARTICLES } from './fermentArticles'
import { GRAIN_ARTICLES } from './grainArticles'
import { KINDS_ARTICLES } from './kindsArticles'
import { NAMES_ARTICLES } from './namesArticles'
import { OAK_ARTICLES } from './oakArticles'
import { WORLD_ARTICLES } from './worldArticles'
import type { LearnArticle } from '../types/learn'
import { listPublishedDrafts, readLearnDrafts } from '../utils/learnDraftStorage'

export const LEARN_ARTICLES: LearnArticle[] = [
  ...BREW_ARTICLES,
  ...DISTILL_ARTICLES,
  ...KINDS_ARTICLES,
  ...NAMES_ARTICLES,
  ...GRAIN_ARTICLES,
  ...FERMENT_ARTICLES,
  ...DISTILL_DEEP_ARTICLES,
  ...OAK_ARTICLES,
  ...WORLD_ARTICLES,
]

export function listPublishedLearn(): LearnArticle[] {
  return [...LEARN_ARTICLES, ...listPublishedDrafts()]
}

export function getLearnArticle(slug: string): LearnArticle | undefined {
  return LEARN_ARTICLES.find((item) => item.slug === slug) ?? readLearnDrafts().find((item) => item.slug === slug)
}

export function listLearnByCategory(category: LearnArticle['category']): LearnArticle[] {
  return listPublishedLearn().filter((item) => item.category === category)
}

export function listLearnByTag(tag: LearnArticle['tag']): LearnArticle[] {
  return listPublishedLearn().filter((item) => item.tag === tag)
}

export function listFeaturedLearn(): LearnArticle[] {
  return LEARN_ARTICLES.filter((item) => item.featured)
}
