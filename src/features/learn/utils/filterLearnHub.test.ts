import { describe, expect, it } from 'vitest'
import type { LearnArticle } from '../types/learn'
import { filterLearnHub } from './filterLearnHub'

const sample: LearnArticle = {
  slug: 'takju-vs-cheongju',
  category: 'kinds',
  tag: 'three-min',
  tone: 'process',
  title: '탁주와 청주의 차이는 무엇일까?',
  question: '탁주와 청주의 차이는 무엇일까?',
  lead: '뿌연 탁주와 맑은 청주',
  minutes: 4,
  sections: [],
  takeaways: [],
  cover: '/images/learn/kinds.svg',
}

describe('filterLearnHub', () => {
  it('filters by title needle', () => {
    expect(filterLearnHub([sample], { q: '탁주', tag: '', category: '' })).toHaveLength(1)
    expect(filterLearnHub([sample], { q: '럼', tag: '', category: '' })).toHaveLength(0)
  })

  it('filters by tag and category', () => {
    expect(filterLearnHub([sample], { q: '', tag: 'three-min', category: '' })).toHaveLength(1)
    expect(filterLearnHub([sample], { q: '', tag: 'oak-story', category: '' })).toHaveLength(0)
    expect(filterLearnHub([sample], { q: '', tag: '', category: 'kinds' })).toHaveLength(1)
  })
})
