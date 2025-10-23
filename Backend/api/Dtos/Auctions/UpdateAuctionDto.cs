namespace api.Dtos.Auctions;

public class UpdateAuctionDto
{
    public int AuctionId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string AuctionImage { get; set; } = string.Empty;
    public string AuctionCategory { get; set; } = string.Empty;
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
    public decimal StartingBid { get; set; }
}
