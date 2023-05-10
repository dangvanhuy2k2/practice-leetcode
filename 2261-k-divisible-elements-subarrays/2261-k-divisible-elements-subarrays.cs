public class Solution
{
    List<int> a = new List<int>();
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
    public void dfs(TrieNode curNode, int i)
    {
        if (i >= a.Count) return;
        int val = a[i];
        if (!curNode.childs.ContainsKey(val))
        {
            ++ans;
            TrieNode newNode = new TrieNode(true);
            curNode.childs[val] = newNode;
        }
        dfs(curNode.childs[val], i + 1);
    }
    public int CountDistinct(int[] nums, int k, int p)
    {
        TrieNode root = new TrieNode();
        int cnt = 0;
        for (int i = 0; i < nums.Length; i++)
        {
            int val = nums[i];
            cnt += val % p != 0 ? 0 : 1;
            if (cnt > k)
            {
                for (int j = 0; j < a.Count; ++j) dfs(root, j);
                while (cnt > k)
                {
                    int num = a[0];
                    a.RemoveAt(0);
                    cnt -= num % p != 0 ? 0 : 1;
                }
            }
            a.Add(val);

        }
        for (int j = 0; j < a.Count; ++j) dfs(root, j);
        return ans;
    }
}