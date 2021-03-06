export function searchMessages(query: string): Promise<Array<any>>;
export function searchConversations(query: string): Promise<Array<any>>;

export function updateStickerLastUsed(
  packId: string,
  stickerId: number,
  time: number
): Promise<void>;
export function updateStickerPackStatus(
  packId: string,
  status: 'advertised' | 'installed' | 'error' | 'pending',
  options?: { timestamp: number }
): Promise<void>;

export function getRecentStickers(): Promise<
  Array<{
    id: number;
    packId: string;
  }>
>;
