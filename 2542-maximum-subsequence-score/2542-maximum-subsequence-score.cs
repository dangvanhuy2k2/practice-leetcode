public class Solution
{
    PriorityQueue<int, int> q = new PriorityQueue<int, int>();
    struct Data
    {
        public int val1, val2;
        public Data(int _val1, int _val2) { val1 = _val1; val2 = _val2; }
    }
    public long MaxScore(int[] nums1, int[] nums2, int k)
    {
        long ans = 0;
        List<Data> a = new List<Data>();
        for (int j = 0; j < nums1.Length; j++)
        {
            a.Add(new Data(nums1[j], nums2[j]));
        }
        a.Sort((Data d1, Data d2) =>
        {
            if (d1.val1 != d2.val1) return d2.val1 - d1.val1;
            return d1.val2 - d2.val2;
        });
        Array.Sort(nums2);
        int i = 0;
        long sum = 0;
        for (int j = 0; j < nums2.Length; ++j)
        {
            int minVal = nums2[j];
            while (q.Count > 0)
            {
                q.TryDequeue(out int val, out int priority);
                if (priority < minVal)
                {
                    sum -= val;
                }
                else
                {
                    q.Enqueue(val, priority);
                    break;
                }
            }

            while (q.Count < k && i < a.Count)
            {
                Data select = a[i++];
                if (select.val2 < minVal) continue;
                sum += select.val1;
                q.Enqueue(select.val1, select.val2);
            }
            if (q.Count != k) break;
            ans = Math.Max(ans, sum * minVal);
        }
        return ans;
    }
}