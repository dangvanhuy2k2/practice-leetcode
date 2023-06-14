struct Data {
	int enqueueTime, processingTime, idx;
	Data(int enqueueTime, int processingTime, int idx) {
		this->enqueueTime = enqueueTime;
		this->processingTime = processingTime;
		this->idx = idx;
	}
};
typedef Data d;
class Compare {
	public: bool operator()(d a, d b) {
		if(a.processingTime != b.processingTime) return a.processingTime > b.processingTime;
		return a.idx > b.idx;
	}
};
bool cmp(d a, d b) {
	if(a.enqueueTime != b.enqueueTime) return a.enqueueTime < b.enqueueTime;
	return a.processingTime < b.processingTime;
}
class Solution {
	public: vector < int > getOrder(vector < vector < int >> & tasks) {
		priority_queue < d, vector < d > , Compare > q;
		vector < d > v;
		for(int i = 0; i < tasks.size(); ++i) {
			v.push_back(d(tasks[i][0], tasks[i][1], i));
		}
		sort(v.begin(), v.end(), cmp);
		int i = 0;
		long long startTime = 0;
		vector < int > ans;
		while(!q.empty() || i < v.size()) {
			if(!q.empty()) {
				d top = q.top();
				q.pop();
				ans.push_back(top.idx);
				long long endTime = startTime + top.processingTime;
				while(i < v.size() && v[i].enqueueTime <= endTime) {
					q.push(v[i]);
					++i;
				}
				startTime = endTime;
			} else {
				q.push(v[i]);
				startTime = v[i].enqueueTime;
				++i;
			}
		}
		return ans;
	}
};