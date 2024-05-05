import { cloudStorageClient } from '@/api/fetch-clients/cloud-storage';
import { ProductCartItem, ProductCartItemDTO } from '@/config/types/entities';
import { CART } from '@/shared';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const CART_STORAGE_KEY = 'SHOP_CART';

export const useCartItems = () => {
  return useQuery({
    queryKey: [CART],
    queryFn: async () => {
      const rawCart = await cloudStorageClient.getItem(CART_STORAGE_KEY);
      if (!rawCart) return [];
      return JSON.parse(rawCart) as ProductCartItem[];
    },
  });
};

export const useAddItemsToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newItem: ProductCartItemDTO) => {
      const rawCartItems = await cloudStorageClient.getItem(CART_STORAGE_KEY);
      if (!rawCartItems) {
        return cloudStorageClient.setItem(
          CART_STORAGE_KEY,
          JSON.stringify([{ ...newItem, count: 1 }])
        );
      }

      const cartItems = JSON.parse(rawCartItems) as ProductCartItem[];
      const existingItemIndex = cartItems.findIndex((item) => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].count += 1;
      } else {
        cartItems.push({ ...newItem, count: 1 });
      }
      return cloudStorageClient.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [CART] });
    },
  });
};

export const useRemoveItemsFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (itemToRemove: ProductCartItemDTO) => {
      const rawCartItems = await cloudStorageClient.getItem(CART_STORAGE_KEY);
      if (!rawCartItems) {
        return;
      }

      const cartItems = JSON.parse(rawCartItems) as ProductCartItem[];
      const existingItemIndex = cartItems.findIndex((item) => item.id === itemToRemove.id);

      if (cartItems[existingItemIndex].count > 1) {
        cartItems[existingItemIndex].count -= 1;
      } else {
        cartItems.splice(existingItemIndex, 1);
      }
      return cloudStorageClient.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [CART] });
    },
  });
};
