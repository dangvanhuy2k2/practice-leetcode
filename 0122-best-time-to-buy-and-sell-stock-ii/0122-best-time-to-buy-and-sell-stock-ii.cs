public class Solution
{
	public int MaxProfit(int[] prices)
	{
		int ans = 0, n = prices.Length;
		int[] dp = new int[n];
		for (int i = n - 1; i >= 0; --i)
		{
			int maxProfit = 0;
			for (int j = i + 1; j < n; ++j)
			{
				if (prices[i] > prices[j]) continue;
				int profit = prices[j] - prices[i];
				if (j + 1 < n) profit += dp[j + 1];
				maxProfit = Math.Max(profit, maxProfit);
			}
			ans = Math.Max(ans, maxProfit);
			dp[i] = ans;
		}
		return ans;
	}
}