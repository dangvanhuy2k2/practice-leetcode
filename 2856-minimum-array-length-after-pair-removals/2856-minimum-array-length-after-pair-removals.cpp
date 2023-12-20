typedef pair<int, int> p;
class Solution
{
public:
	int minLengthAfterRemovals(vector<int> &nums)
	{
		nums.push_back(-1);
		priority_queue<p> maxHeap;
		priority_queue<p, vector<p>, greater<p>> minHeap;
		map<int, int> m;
		int cnt = 1, prev = nums[0];
		for (int i = 1; i < nums.size(); ++i)
		{
			if (prev == nums[i])
			{
				++cnt;
			}
			else
			{
				maxHeap.push({cnt, prev});
				minHeap.push({cnt, prev});
				m[prev] = cnt;
				cnt = 1;
			}
			prev = nums[i];
		}

		while (!maxHeap.empty() && !minHeap.empty())
		{
			p top1 = maxHeap.top();
			maxHeap.pop();
			p top2 = minHeap.top();
			minHeap.pop();

			if (top1.second == top2.second)
				break;
			--top1.first;
			m[top1.second] = top1.first;
			if (top1.first)
			{
				maxHeap.push(top1);
				minHeap.push(top1);
			}
			--top2.first;
			m[top2.second] = top2.first;
			if (top2.first)
			{
				minHeap.push(top2);
				maxHeap.push(top2);
			}

			while (!maxHeap.empty())
			{
				p top = maxHeap.top();
				if (m[top.second] != top.first)
				{
					maxHeap.pop();
				}
				else
					break;
			}

			while (!minHeap.empty())
			{
				p top = minHeap.top();
				if (m[top.second] != top.first)
				{
					minHeap.pop();
				}
				else
					break;
			}
		}
		int ans = 0;
		for (auto it : m)
		{
			ans += it.second;
		}
		return ans;
	}
};