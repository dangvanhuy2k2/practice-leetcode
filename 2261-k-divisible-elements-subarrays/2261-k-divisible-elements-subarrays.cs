public class Solution
{
    int ans = 0;
    public class TrieNode
    {
        public Dictionary<int, TrieNode> childs = new Dictionary<int, TrieNode>();
        public bool isEnd;

        public TrieNode(bool isEnd = false)
        {
            this.isEnd = isEnd;
        }
    }
    public void dfs(TrieNode curNode, int i, int end, int[] nums)
    {
        if (i >= end) return;
        int val = nums[i];
        if (!curNode.childs.ContainsKey(val))
        {
            ++ans;
            TrieNode newNode = new TrieNode(true);
            curNode.childs[val] = newNode;
        }
        dfs(curNode.childs[val], i + 1, end, nums);
    }
    public int CountDistinct(int[] nums, int k, int p)
    {
        TrieNode root = new TrieNode();
        int cnt = 0, l = 0;
        for (int r = 0; r < nums.Length; r++)
        {
            int val = nums[r];
            cnt += val % p != 0 ? 0 : 1;
            if (cnt <= k) continue;
            for (int j = l; j < r; ++j) dfs(root, j, r, nums);
            while (cnt > k)
            {
                int num = nums[l++];
                cnt -= num % p != 0 ? 0 : 1;
            }
        }
        for (int j = l; j < nums.Length; ++j) dfs(root, j, nums.Length, nums);
        return ans;
    }
}