export type NotificationType =
  | 'PRODUCT_SELLER_PURCHASE_REQUESTED'
  | 'PRODUCT_BUYER_PURCHASE_COMPLETE'
  | 'PRODUCT_SELLER_PURCHASE_ACCEPTED'
  | 'PRODUCT_BUYER_PURCHASE_ACCEPTED'
  | 'PRODUCT_SELLER_NEW_OFFER'
  | 'PRODUCT_BUYER_OFFER_REJECTED'
  | 'PRODUCT_BUYER_OFFER_ACCEPTED'
  | 'PRODUCT_BUYER_PURCHASE_DELIVERED'
  | 'PRODUCT_ADMIN_NEW_CLAIM'
  | 'PRODUCT_BUYER_CLAIM_REJECTED'
  | 'PRODUCT_BUYER_CLAIM_ACCEPTED'
  | 'PRODUCT_SELLER_QUESTION_NEW'
  | 'PRODUCT_BUYER_QUESTION_ANSWER'
  | 'PRODUCT_SELLER_BID_FINISHED'
  | 'PRODUCT_BUYER_BID_WON'
  | 'PRODUCT_BUYER_BID_OUTBID'
  | 'PRODUCT_BUYER_REVIEW'