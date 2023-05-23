public class KthLargest
{
    PriorityQueue<int, int> minHeap = new PriorityQueue<int, int>();
    int k;
    public KthLargest(int k, int[] nums)
    {
        this.k = k;
        foreach (int val in nums)
        {
            minHeap.Enqueue(val, val);
            if (minHeap.Count <= k) continue;
            minHeap.Dequeue();
        }
    }

    public int Add(int val)
    {
        minHeap.Enqueue(val, val);
        if (minHeap.Count > k) minHeap.Dequeue();
        return minHeap.Peek();
    }
}