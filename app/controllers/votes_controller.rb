class VotesController < ApplicationController

  def index
  end

  def new
    @vote = new_vote
  end

  def create
    voted = current_user ? current_user.votes.create(normalized_params[:vote]) : Vote.create(normalized_params[:vote])
    
    random_vote_message_key = get_random_vote_message_key()

    if voted.correct?
      flash[:notice] = I18n.t("vote.correct")[random_vote_message_key]
    else
      flash[:alert] = I18n.t("vote.incorrect")[random_vote_message_key]
    end

    @vote = new_vote
    redirect_to new_vote_path
  end

  private
  def new_vote
    current_user ? current_user.votes.new : Vote.new
  end

  def normalized_params
    params[:vote][:answer_id] ||= params[:vote].delete(:answers)
    params.permit!
  end

  def get_random_vote_message_key
    rand(1..6)
  end

end