const AccountRoutes = {
  path: '/accounts',
  meta: {
    requiresAuth: true
  },
  redirect: '/accounts/deposit',
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    {
      name: 'Deposit',
      path: '/accounts/deposit',
      component: () => import('@/views/accounts/deposit/Deposit.vue')
    },
    {
      name: 'Withdraw',
      path: '/accounts/withdraw',
      component: () => import('@/views/accounts/withdraw/Withdraw.vue')
    },
    {
      name: 'KYC',
      path: '/accounts/kyc',
      component: () => import('@/views/accounts/kyc/VerifyKyc.vue')
    },
    {
      name: 'Explore Plans',
      path: '/accounts/plans',
      component: () => import('@/views/accounts/Products/BuyProducts.vue')
    }
  ]
};

export default AccountRoutes;
