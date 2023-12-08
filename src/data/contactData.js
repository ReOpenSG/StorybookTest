import productIconBlack from '@/assets/productIconBlack.svg';
import productIconWhite from '@/assets/productIconWhite.svg';
import exampleIconBlack from '@/assets/exampleIconBlack.svg';
import exampleIconWhite from '@/assets/exampleIconWhite.svg';

export const data = [
  {
    id: 'productId',
    defaultValue: '제품 문의',
    default: 'productStatus',
    onClick: {
      setProductStatus: true,
      setPurchaseStatus: false,
      setAsStatus: false,
      setEtcStatus: false,
    },
    blackIcon: productIconBlack,
    whiteIcon: productIconWhite,
  },
  {
    id: 'purchaseId',
    defaultValue: '구매 문의',
    default: 'purchaseStatus',

    onClick: {
      setProductStatus: false,
      setPurchaseStatus: true,
      setAsStatus: false,
      setEtcStatus: false,
    },
    blackIcon: exampleIconBlack,
    whiteIcon: exampleIconWhite,
  },
  {
    id: 'asId',
    defaultValue: 'AS 문의',
    default: 'asStatus',

    onClick: {
      setProductStatus: false,
      setPurchaseStatus: false,
      setAsStatus: true,
      setEtcStatus: false,
    },
    blackIcon: productIconBlack,
    whiteIcon: productIconWhite,
  },
  {
    id: 'etcId',
    defaultValue: '기타 문의',
    default: 'etcStatus',

    onClick: {
      setProductStatus: false,
      setPurchaseStatus: false,
      setAsStatus: false,
      setEtcStatus: true,
    },
    blackIcon: exampleIconBlack,
    whiteIcon: exampleIconWhite,
  },
];
