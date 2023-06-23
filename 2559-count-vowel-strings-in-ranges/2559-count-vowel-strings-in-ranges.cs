using System;

public class Solution
{
	string vowel = "ueoai";
	bool isValid(string w)
	{
		char fisrtChar = w[0], lastChar = w[w.Length - 1];
		return vowel.IndexOf(fisrtChar) != -1 && vowel.IndexOf(lastChar) != -1;
	}
	public int[] VowelStrings(string[] words, int[][] queries)
	{
		int n = words.Length;
		int[] prefix = new int[n];
		int sum = 0;
		for (int i = 0; i < n; ++i)
		{
			string w = words[i];
			sum += isValid(w) ? 1 : 0;
			prefix[i] = sum;
		}
		int[] ans = new int[queries.Length];
		for (int i = 0; i < queries.Length; ++i)
		{
			int[] q = queries[i];
			int l = q[0];
			int r = q[1];
			int cnt = prefix[r];
			if (l - 1 >= 0) cnt -= prefix[l - 1];
			ans[i] = cnt;
		}
		return ans;
	}
}