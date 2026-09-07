import type {
  LoungeCustomer,
  LoungeMonthBar,
  LoungeOrder,
  LoungeProductRow,
  LoungeSettlement,
  LoungeSplitSlice,
  LoungeSubscribeRow,
} from '../types/lounge'

const BOTTLE =
  'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=400&fit=crop&q=80'

export const LOUNGE_ORDERS: LoungeOrder[] = [
  { id: 'S250113-1002', sellerId: 'hansan', time: '14:22', product: '한산 소곡주 생주 1.8L', buyer: '김*아', amount: 45000, status: '결제 확인' },
  { id: 'S250113-1001', sellerId: 'hansan', time: '13:08', product: '한산 소곡주 선물세트', buyer: '이*훈', amount: 72000, status: '신규 주문' },
  { id: 'S250113-0998', sellerId: 'hansan', time: '11:40', product: '한산 소곡주 300ml', buyer: '박*연', amount: 18000, status: '출고 준비' },
  { id: 'S250113-0881', sellerId: 'andong', time: '15:01', product: '명인 안동소주 45', buyer: '최*수', amount: 68000, status: '결제 확인' },
  { id: 'S250113-0870', sellerId: 'andong', time: '09:17', product: '안동소주 미니 2병', buyer: '정*희', amount: 32000, status: '신규 주문' },
]

export const LOUNGE_SETTLEMENTS: LoungeSettlement[] = [
  { id: 'st-h1', sellerId: 'hansan', date: '2026.10.15', orderId: 'ORD-20261015-882', product: '한산 소곡주 생주 1.8L', paid: 45000, fee: 4950, due: 40050, status: '정산완료' },
  { id: 'st-h2', sellerId: 'hansan', date: '2026.10.12', orderId: 'ORD-20261012-441', product: '한산 소곡주 선물세트', paid: 72000, fee: 7920, due: 64080, status: '정산대기' },
  { id: 'st-h3', sellerId: 'hansan', date: '2026.10.09', orderId: 'ORD-20261009-118', product: '한산 소곡주 300ml', paid: 18000, fee: 1980, due: 16020, status: '정산완료' },
  { id: 'st-a1', sellerId: 'andong', date: '2026.10.14', orderId: 'ORD-20261014-220', product: '명인 안동소주 45', paid: 68000, fee: 7480, due: 60520, status: '정산완료' },
  { id: 'st-a2', sellerId: 'andong', date: '2026.10.11', orderId: 'ORD-20261011-073', product: '안동소주 미니 2병', paid: 32000, fee: 3520, due: 28480, status: '정산대기' },
]

export const LOUNGE_PRODUCTS: LoungeProductRow[] = [
  { id: 'p-h1', sellerId: 'hansan', name: '한산 소곡주 생주 1.8L', category: '약주', stock: 86, price: 45000, image: BOTTLE },
  { id: 'p-h2', sellerId: 'hansan', name: '한산 소곡주 선물세트', category: '약주', stock: 24, price: 72000, image: BOTTLE },
  { id: 'p-a1', sellerId: 'andong', name: '명인 안동소주 45', category: '증류주', stock: 40, price: 68000, image: BOTTLE },
]

export const LOUNGE_CUSTOMERS: LoungeCustomer[] = [
  { id: 'c-h1', sellerId: 'hansan', name: '김*아', orders: 6, spend: 214000 },
  { id: 'c-h2', sellerId: 'hansan', name: '이*훈', orders: 2, spend: 90000 },
  { id: 'c-a1', sellerId: 'andong', name: '최*수', orders: 4, spend: 188000 },
]

export const LOUNGE_SUBSCRIBES: LoungeSubscribeRow[] = [
  { id: 'sub-h1', sellerId: 'hansan', plan: '소곡주 월 1병', member: '김*아', nextShip: '2026.10.25', status: '진행' },
  { id: 'sub-a1', sellerId: 'andong', plan: '안동소주 격월', member: '최*수', nextShip: '2026.11.02', status: '휴면' },
]

export const HANSAN_BARS: LoungeMonthBar[] = [
  { month: '1월', amount: 6_200_000 },
  { month: '2월', amount: 5_800_000 },
  { month: '3월', amount: 7_100_000 },
  { month: '4월', amount: 6_900_000 },
  { month: '5월', amount: 8_400_000 },
  { month: '6월', amount: 9_200_000 },
  { month: '7월', amount: 8_800_000 },
  { month: '8월', amount: 10_100_000 },
  { month: '9월', amount: 11_400_000 },
  { month: '10월', amount: 12_450_000 },
  { month: '11월', amount: 9_600_000 },
  { month: '12월', amount: 13_200_000 },
]

export const ANDONG_BARS: LoungeMonthBar[] = HANSAN_BARS.map((row) => ({
  ...row,
  amount: Math.round(row.amount * 0.62),
}))

export const HANSAN_SPLIT: LoungeSplitSlice[] = [
  { id: 'online', label: '온라인 판매', percent: 75 },
  { id: 'class', label: '클래스 예약', percent: 15 },
  { id: 'fee', label: '기타 수수료', percent: 10 },
]

export const ANDONG_SPLIT: LoungeSplitSlice[] = [
  { id: 'online', label: '온라인 판매', percent: 82 },
  { id: 'class', label: '클래스 예약', percent: 8 },
  { id: 'fee', label: '기타 수수료', percent: 10 },
]

export const ALL_SPLIT: LoungeSplitSlice[] = [
  { id: 'online', label: '온라인 판매', percent: 78 },
  { id: 'class', label: '클래스 예약', percent: 12 },
  { id: 'fee', label: '기타 수수료', percent: 10 },
]
